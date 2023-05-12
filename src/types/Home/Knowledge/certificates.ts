export interface IPopup {
    popup: string | null;
    setPopup: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface ICertificates {
    content: {
        image: string;
    }[]
    setPopup: React.Dispatch<React.SetStateAction<string | null>>;
}
