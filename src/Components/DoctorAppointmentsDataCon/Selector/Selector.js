import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';



const Selector = (props) => {

    const bookingId = props.id

    const [action, setAction] = React.useState('');

    const handleChange = (event) => {
        setAction(event.target.value);
    };

    const query = {
        action: action,
        bookingId: bookingId
    }
    console.log('bookingId is', bookingId);


    // useEffect(() => {

    // }, [action])

    if (action) {
        fetch('https://shielded-falls-27055.herokuapp.com/updateAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(query),
        })
            .then(response => response.json())
            .then(data =>
                console.log('Success:')
            )
    }




    const style = {
        color: 'white',
        outline: 'none',
        fontWeight: 650,
    }
    return (
        <div>
            <FormControl className='primaryBtn' id='selectorBtn' >
                <NativeSelect
                    style={style}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={action}
                    onChange={handleChange}
                    defaultValue={props.preAction}

                >
                    <option style={{ color: 'black' }} value={'Not visited'}>Not visited</option>
                    <option style={{ color: 'black' }} value={'Panning'}>Panning</option>
                    <option style={{ color: 'black' }} value={'Visited'}>Visited</option>
                </NativeSelect>
            </FormControl>
        </div>
    );
};

export default Selector;