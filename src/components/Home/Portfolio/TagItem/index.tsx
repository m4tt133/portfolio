interface Props {
    heading: object
    image: object
}

interface ContentProps {
    content: Props
}

export default function TagItem({ content }: ContentProps): React.ReactElement {
    let label;

    if(content.attributes){
        label = content.attributes.label;
    }else{
        label = content.label;
    }
    
    return(
        <span className="bg-[white] rounded-[5px] text-[12px] py-[8px] px-[25px] font-bold">
            {label}
        </span>
    )
}