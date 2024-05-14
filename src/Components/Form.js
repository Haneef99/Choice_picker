import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Snackbar from '@mui/joy/Snackbar';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';


export default function Form(props) {
  const [open, setOpen] = React.useState(false);
  const [numOptions, setNumOptions] = React.useState(0);
  const [options, setOptions] = React.useState([]);
  const [weights, setWeights] = React.useState([]);
  const [title, setTitle] = React.useState('')
  const [openS, setOpenS] = React.useState(false);

  const handleNumOptionsChange = (e) => {
    const count = parseInt(e.target.value);
    setNumOptions(count);

    // Reset options array to empty when number of options changes
    setOptions([]);
  };

  const handleOptionChange = (index, e) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  const handleWeightChange = (index, e) => {
    const newWeights = [...weights];
    newWeights[index] = e.target.value;
    setWeights(newWeights);
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
  }

  const renderOptionInputs = () => {
    const inputs = [];
    for (let i = 0; i < numOptions; i++) {
      inputs.push(
        <div className='form-grp'>
            <Input
            key={i}
            type="text"
            value={options[i] || ''}
            onChange={(e) => handleOptionChange(i, e)}
            placeholder={`Option ${i + 1}`}
            required
            sx={{marginRight: '5px'}}
            />
            <Input
            key={i}
            type="text"
            value={weights[i] || ''}
            onChange={(e) => handleWeightChange(i, e)}
            placeholder={`Weight ${i + 1}`}
            required
            sx={{marginLeft: '5px'}}
            />
          </div>
      );
    }
    return inputs;
  };
  

  return (
    <>
      <Button
        variant="soft"
        color="success"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        New Event
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Create new Event</DialogTitle>
          <DialogContent>Fill in the information of the Event.</DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              let dt = new Object();
              dt.count = numOptions
              dt.options  = options
              dt.weights = weights
              dt.title = title
              const JsonString = JSON.stringify(dt)
              const newdata = [...props.data];
                newdata.push(JsonString);
                props.setData(newdata);
                setOpenS(true);
                setWeights([])
                setOptions([])
                setNumOptions(0)
                setTitle('')
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Number of options</FormLabel>
                <Input autoFocus required onChange={handleNumOptionsChange}/>
              </FormControl>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input autoFocus required onChange={handleTitleChange}/>
              </FormControl>
              {renderOptionInputs()}
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>

      <Snackbar
        variant="soft"
        color="success"
        open={openS}
        onClose={() => setOpenS(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
        endDecorator={
          <Button
            onClick={() => setOpenS(false)}
            size="sm"
            variant="soft"
            color="success"
          >
            Dismiss
          </Button>
        }
      >
        Predictied Successfully
      </Snackbar>
    </>
  );
}
