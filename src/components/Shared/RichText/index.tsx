import ReactMarkdown from 'react-markdown'

interface Props {
    content: string
}

export default function RichText({ content }: Props){
    return(
        <ReactMarkdown className='markdown'>
            {content}
        </ReactMarkdown>
    )
}