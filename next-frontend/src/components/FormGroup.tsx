const dataFormGroup = [
    {
        text: 'It slows down my computer'
    },
    {
        text: 'The oOhcoupons window shows too often'
    },
    {
        text: 'Privacy concerns'
    },
    {
        text: 'Not enough international stores'
    },
    {
        text: 'I am using another browser extension or discount provider'
    },
    {
        text: 'Coupons didn\'t work'
    },
    {
        text: 'I found it to be buggy'
    },
    {
        text: 'Other, please explain:'
    },
]

export const FormGroup = ({ content, index }: any) => {
    return (
        <div className="form-group" key={index}>
            <input
                type="checkbox"
                name="reason[]"
                id={`reason${index}`}
                data-reason={`#data-reason${index}`}
                defaultValue={content}
            />
            <label htmlFor={`reason${index}`}>
                <span className="checkmark" />
                {content}
            </label>
        </div>
    )
}

const Form = ({ openModal }: any) => {
    return (
        <form action="" id="uninstall_form" method="POST" className="help-us-form" onSubmit={(e) => { e.preventDefault() }}> {/* Prevent Action Submit  */}
            {dataFormGroup.map((item, index) => (
                <FormGroup content={item.text} index={index} key={index} />
            ))}
            <textarea
                name="content"
                id="content"
                rows={4}
                placeholder="How else can we improve oOhcoupons?"
                className="form-control"
                defaultValue={""}
            />
            <button id="submit_btn" type="submit" className={`btn btn-submit btn-primary`} onClick={openModal}>
                Submit
            </button>
        </form>
    )
}

export default Form