import {
    BookOpen,
    Network,
    Lightbulb,
    Banknote,
    Star,
    Trash2,
    MountainSnow,
    Music,
    Dices,
    CheckSquare,
    Settings,
    ClipboardList
} from 'lucide-react';

export const Icons = {
    // Stats / Skills
    Knowledge: Settings,
    Organization: ClipboardList,
    Creativity: Lightbulb,

    // Legacy / Alternative mappings (kept for compatibility or specific variants)
    Book: BookOpen,
    Network: Network,
    Settings: Settings,

    // Resources
    Budget: Banknote,
    Prestige: Star,

    // Actions
    Dismiss: Trash2,
    Check: CheckSquare,

    // Hobbies / Traits
    Outdoor: MountainSnow,
    Music: Music,
    Boardgames: Dices,
};
