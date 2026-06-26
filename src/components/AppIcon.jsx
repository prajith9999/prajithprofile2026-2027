import {
  AcademicCapIcon,
  ArrowRightOnRectangleIcon,
  BoltIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckIcon,
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
