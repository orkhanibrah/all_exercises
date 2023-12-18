const FormComponent = props => {
    let {handleSubmit} = props;

    return(
        <>
        <form onSubmit={handleSubmit}>
            <InputPlaceholder id="fname" placeholder="First Name" type="text" />
            <InputPlaceholder id="lname" placeholder="Last Name" type="text" />
            <InputPlaceholder id="age" placeholder="Age" type="number" /><br/>
            <InputCheckbox id='male' type='checkbox' label='Male' value='male' />
            <InputCheckbox id='female' type='checkbox' label='Female' value='female' />
            <label><b>Select your destination</b></label><br />
            <select>
                <option value=''>--Please Choose a Destination--</option>
                <option value='Thailand'>Thailand</option>
                <option value='Japan'>Japan</option>
                <option value='Brazil'>Brazil</option>
            </select><br/><br/>
            <label><b>Dietary restrictions:</b></label><br/>
            <InputCheckbox id='nuts' type='checkbox' label='Nuts free' value='Yes' />
            <InputCheckbox id='lactose' type='checkbox' label='Lactose free' value='Yes' />
            <InputCheckbox id='vegan' type='checkbox' label='Vegan' value='Yes' /><br/>
            <button type="submit">Submit</button>
        </form>
        
        </>
    )
}

const InputPlaceholder = (props) => {
    let { id, placeholder, type } = props
    return (
        <>
            <input
                placeholder={placeholder}
                id={id}
                type={type}
            /><br />
        </>
    );
}

const InputCheckbox = props => {
    let {id, label, type, value} = props;
    return (
        <>
            <input
                id={id}
                type={type}
                value={value}
            />
            <label>{label}</label><br />
        </>
    )
}

export default FormComponent
