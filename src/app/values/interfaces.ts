export interface Speaker {
    id: number;
    name: string;
    email: string;
}

export interface Talk {
    id: number;
    speaker_id: number;
    name: string;
    abstract: string;
    accepted: boolean;
    timeSlot?: string;
}

export interface CompleteTalk extends Talk{
    speaker: Speaker;
}
