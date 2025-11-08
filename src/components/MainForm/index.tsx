import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useTaskContext } from '../../templates/contexts/TaskContext/useTaskContext';

export function MainForm() {
  const { setState } = useTaskContext();

  function handleClick() {
    setState(prevState => ({
      ...prevState,
      secondsRemaining: 1500,
      formattedSecondsRemaining: '25:00',
    }));
  }

  return (
    <form className='form' action=''>
      <button onClick={handleClick} type='button'>
        Testar Context
      </button>

      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          labelText='task'
          title='Titulo do meu input'
          placeholder='Digite sua tarefa'
        />
      </div>

      <div className='formRow'>
        <span>Próximo intervalo é de 25 min</span>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
