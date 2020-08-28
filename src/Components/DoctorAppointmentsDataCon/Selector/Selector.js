import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';



const Selector = () => {

    const [action, setAction] = React.useState('');
    console.log(action);

    const handleChange = (event) => {
        setAction(event.target.value);
    };

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
                    // labelId="demo-simple-select-label"
                    // id="demo-simple-select"
                    value={action}
                    onChange={handleChange}
                    defaultValue={'Not visited'}

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