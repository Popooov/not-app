import { Switch } from '@headlessui/react'

export const Toggle = ({ enabled, setEnabled }) => {

    return (
        <div className='col-start-4 col-end-5 justify-self-end row-span-2'>
            <Switch.Group>
                <div className='flex items-center'>
                    {/* <Switch.Label className={`${enabled ? 'bg-green-400' : ' bg-red-400'} mr-2 p-1.5 text-white text-xs rounded-full`}></Switch.Label> */}
                    <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                        enabled ? 'bg-green-400' : 'bg-zinc-300'
                    } transition-all relative inline-flex items-center h-5 w-10 rounded-full`}
                    >
                    {/* <span className="sr-only"></span> */}
                    <span
                        className={`${
                        enabled ? 'translate-x-6' : 'translate-x-1'
                        } transition-all inline-block w-3 h-3 transform bg-white rounded-full`}
                    />
                    </Switch>
                </div>
            </Switch.Group>
        </div>
    )
}