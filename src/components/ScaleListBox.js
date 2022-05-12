import { Fragment, useContext } from 'react'
import ChartContext from '../contexts/ChartContext'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

export function ScaleListBox({ scale, selected }) {

  const { 
    selectedScaleX, 
    setSelectedScaleX,
    selectedScaleY, 
    setSelectedScaleY,
    selectedScaleXY,
    setSelectedScaleXY,
    chartType
  } = useContext(ChartContext)

  const handleSelected = (selected) => {
    if(selected === 'scaleX') {
      return selectedScaleX
    } else if(selected === 'scaleY') {
      return selectedScaleY
    } else  {
      return selectedScaleXY
    }
  }

  const handleSetSelected = (selected) => {
    if(selected === 'scaleX') {
      return setSelectedScaleX
    } else if(selected === 'scaleY') {
      return setSelectedScaleY
    } else {
      return setSelectedScaleXY
    }
  }

  return (
    <div className="w-[6.5rem] sm:mr-5 xl:mb-4">
      <Listbox
        value={handleSelected(selected)}
        onChange={handleSetSelected(selected)}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-[95%] sm:w-full py-2 pl-3 pr-10 text-left text-xs rounded-lg bg-zinc-100 border-2 border-zinc-400 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{handleSelected(selected)}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-xs bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {scale.map((scale, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-6 pr-4 ${
                      active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                    }`
                  }
                  value={scale}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {scale}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-amber-600">
                          <CheckIcon className="w-3 h-3" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}