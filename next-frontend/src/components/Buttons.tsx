export const ButtonPrimary = ({ link, text, cl }: any) => {
    return (
        <a href={link} className={`btn-primary bg-[#F08140] ${cl}`} target={`_blank`}>{text}</a>
    )
}
