import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. Unfortunately, after each guess, the
        color of the tiles will change but will not show you anything
        about how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" status="absent" />
        <Cell value="O" status="absent" />
        <Cell value="R" status="absent" />
        <Cell value="R" status="absent" />
        <Cell value="Y" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        All these letters might have been in the word. <br /> Who knows?
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-4">
        Welcome to the control group!{' '}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <a target="_blank" href="https://xkcd.com/2576/" rel="noreferrer">More info...</a>
      </p>

    </BaseModal>
  )
}
