import './index.css'
import CheckIcon from '../../../../icons/check.svg'

export interface CardProps {
    id: number;
    title: string;
    description: string;
    date: Date;
    done: boolean;
}

interface ComponentProps {
    cardInfo : CardProps;
    onClick : (index : number) => void;
}

function getDate(date : Date) {
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
}


export default function Card(props : ComponentProps) {
    return (
        <div onClick={() => props.onClick(props.cardInfo.id)} className='card'>
            <p className='card-title'>{props.cardInfo.title}</p>
            <span className='card-description'>{props.cardInfo.description}</span>
            <div className='card-footer'>
                <div className='card-footer-date'>{getDate(props.cardInfo.date)}</div>
                <div className="card-footer-state">
                    <svg width="20" height="20" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill={props.cardInfo.done ? '#1C8B4C' : '#2C2F48'} d="M10.8772 24.7835L2.43436 16.0392C0.849645 14.3978 0.992705 11.7561 2.7454 10.2955C4.30548 8.99543 6.59949 9.09949 8.03546 10.5355L10.8638 13.3638C12.3487 14.8487 14.7293 14.9325 16.3149 13.5555L29.5701 2.04439C31.2024 0.62685 33.6657 0.762819 35.1321 2.3514L35.6898 2.95562C37.2256 4.61939 37.0755 7.2251 35.3587 8.70148L16.3629 25.0379C14.7558 26.42 12.3495 26.3084 10.8772 24.7835Z" />
                    </svg>
                </div>
            </div>
        
        </div>
    );
}