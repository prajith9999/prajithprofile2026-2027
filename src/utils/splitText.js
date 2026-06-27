/**
 * Lightweight SplitText-style utility (line + word masks).
 * Cipher Digital / ONBOX-style scroll reveals without the Club plugin.
 */

function preserveAria(element, text) {
  if (!element.getAttribute('aria-label')) {
    element.setAttribute('aria-label', text.trim());
  }
}

function createWordMask(word) {
  const mask = document.createElement('span');
  mask.className = 'split-mask';
  mask.setAttribute('aria-hidden', 'true');

  const inner = document.createElement('span');
  inner.className = 'split-word';
  inner.textContent = word;
  mask.appendChild(inner);

  return { mask, inner };
}

function groupNodesIntoLines(nodes) {
  if (!nodes.length) return [];

  const lines = [];
  let currentLine = [];
  let currentTop = null;

  nodes.forEach((node) => {
    const top = Math.round(node.offsetTop);
    if (currentTop === null || top === currentTop) {
      currentLine.push(node);
      currentTop = top;
      return;
    }

    lines.push(currentLine);
    currentLine = [node];
    currentTop = top;
  });

  if (currentLine.length) lines.push(currentLine);
  return lines;
}

function wrapLine(nodes) {
  const line = document.createElement('span');
  line.className = 'split-line';
  line.setAttribute('aria-hidden', 'true');

  const lineMask = document.createElement('span');
  lineMask.className = 'split-line-mask';

  nodes.forEach((node) => lineMask.appendChild(node));
  line.appendChild(lineMask);

  return { line, lineMask };
}

export function splitText(element, options = {}) {
  const type = options.type ?? 'words';
  const originalHTML = element.innerHTML;
  const originalText = element.textContent ?? '';

  preserveAria(element, originalText);
  element.classList.add('is-split');
  element.innerHTML = '';

  if (type === 'chars') {
    const charEls = [];
    originalText.split('').forEach((char) => {
      if (char === ' ') {
        const space = document.createElement('span');
        space.className = 'split-space';
        space.textContent = ' ';
        space.setAttribute('aria-hidden', 'true');
        element.appendChild(space);
        return;
      }

      const mask = document.createElement('span');
      mask.className = 'split-mask';
      const inner = document.createElement('span');
      inner.className = 'split-char';
      inner.textContent = char;
      mask.appendChild(inner);
      element.appendChild(mask);
      charEls.push(inner);
    });

    return {
      element,
      chars: charEls,
      words: charEls,
      lines: [],
      revert() {
        element.innerHTML = originalHTML;
        element.classList.remove('is-split');
      },
    };
  }

  const words = originalText.trim().split(/\s+/).filter(Boolean);
  const wordEls = [];
  const flowNodes = [];

  words.forEach((word, index) => {
    const { mask, inner } = createWordMask(word);
    wordEls.push(inner);
    flowNodes.push(mask);

    if (index < words.length - 1) {
      const space = document.createElement('span');
      space.className = 'split-space';
      space.textContent = ' ';
      space.setAttribute('aria-hidden', 'true');
      flowNodes.push(space);
    }
  });

  if (type === 'lines') {
    flowNodes.forEach((node) => element.appendChild(node));

    const lineGroups = groupNodesIntoLines(flowNodes);
    const savedGroups = lineGroups.map((group) => [...group]);
    element.innerHTML = '';

    const lineEls = [];
    savedGroups.forEach((group) => {
      const { line, lineMask } = wrapLine(group);
      element.appendChild(line);
      lineEls.push(lineMask);
    });

    return {
      element,
      words: wordEls,
      lines: lineEls,
      revert() {
        element.innerHTML = originalHTML;
        element.classList.remove('is-split');
      },
    };
  }

  flowNodes.forEach((node) => element.appendChild(node));

  return {
    element,
    words: wordEls,
    lines: [],
    revert() {
      element.innerHTML = originalHTML;
      element.classList.remove('is-split');
    },
  };
}

export function splitTextPreserveMarkup(element) {
  const originalHTML = element.innerHTML;
  const wordEls = [];

  element.querySelectorAll('.gsap-word').forEach((wordEl) => {
    const text = wordEl.textContent ?? '';
    preserveAria(wordEl, text);
    wordEl.classList.add('is-split');

    const { mask, inner } = createWordMask(text);
    wordEl.innerHTML = '';
    wordEl.appendChild(mask);
    wordEls.push(inner);
  });

  return {
    words: wordEls,
    revert() {
      element.innerHTML = originalHTML;
    },
  };
}
