import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source word guessing game inspired by{' '}
        <a
          target="_blank"
          href="https://xkcd.com/2576/"
          className="underline font-bold" rel="noreferrer"
        >this cartoon</a>.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-4">
        You can{' '}
        <a
          target="_blank"
          href="https://github.com/dcwarwick/Placeble"
          className="underline font-bold" rel="noreferrer"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
