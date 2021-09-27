export interface IHeroProps {
    backgroundColor?: string;
    subTitle: string;
    title: string;    
    color?: {control:string};
    buttonGroup: IButton[]
}

export interface IButton {
    backgroundColor?: string;
    label: string;
    onClick?: () => void;
    size: 'small' | 'medium' | 'large';
    type: 'primary' | 'secondary';

}

