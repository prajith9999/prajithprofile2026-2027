import {
  AcademicCapIcon,
  ArrowRightOnRectangleIcon,
  BoltIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckIcon,
  ChevronRightIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  CloudIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  HomeIcon,
  MapPinIcon,
  PaintBrushIcon,
  PhoneIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  TrophyIcon,
  UserGroupIcon,
  UserIcon,
  VideoCameraIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { ArrowUpIcon as ArrowUpSolidIcon } from '@heroicons/react/24/solid';

function GitHubIcon({ className, width, height }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon({ className, width, height }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM21 13.69c0-3.84-2.05-5.63-4.79-5.63-2.2 0-3.19 1.21-3.74 2.06V8.25H9.22V21h3.25v-6.31c0-1.66.31-3.27 2.37-3.27 2.03 0 2.06 1.9 2.06 3.38V21H21v-7.31Z" />
    </svg>
  );
}

function InstagramIcon({ className, width, height }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.7" r="1.15" fill="currentColor" />
    </svg>
  );
}

const ICONS = {
  paintBrush: PaintBrushIcon,
  bolt: BoltIcon,
  cloud: CloudIcon,
  database: CircleStackIcon,
  desktop: ComputerDesktopIcon,
  wrench: WrenchScrewdriverIcon,
  code: CodeBracketIcon,
  shield: ShieldCheckIcon,
  cog: Cog6ToothIcon,
  globe: GlobeAltIcon,
  clipboard: ClipboardDocumentCheckIcon,
  users: UserGroupIcon,
  envelope: EnvelopeIcon,
  phone: PhoneIcon,
  briefcase: BriefcaseIcon,
  mapPin: MapPinIcon,
  academic: AcademicCapIcon,
  video: VideoCameraIcon,
  book: BookOpenIcon,
  rocket: RocketLaunchIcon,
  server: ServerStackIcon,
  chart: ChartBarIcon,
  check: CheckIcon,
  shoppingBag: ShoppingBagIcon,
  home: HomeIcon,
  user: UserIcon,
  login: ArrowRightOnRectangleIcon,
  trophy: TrophyIcon,
  arrowUp: ArrowUpSolidIcon,
  chevronRight: ChevronRightIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
};

export default function AppIcon({ name, className = '', size = 24 }) {
  const Icon = ICONS[name];
  if (!Icon) return null;

  return (
    <Icon
      className={`app-icon ${className}`.trim()}
      width={size}
      height={size}
      aria-hidden="true"
    />
  );
}
