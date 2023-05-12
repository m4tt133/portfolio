interface Props {
    label: string
}

export default function TagItem({ label }: Props): React.ReactElement {
    return(
        <span className="bg-[white] rounded-[5px] text-[12px] py-[8px] px-[25px] font-bold">
            {label}
        </span>
    )
}