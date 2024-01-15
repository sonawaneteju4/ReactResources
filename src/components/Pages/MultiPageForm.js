import React from 'react'
import {FormProvider} from '../../MultipageForm/context/FormContext'
import Form from '../../MultipageForm/components/Form'
const MultiPageForm = () => {
  return (
    <div>
          <FormProvider>
            <Form/>
          </FormProvider>

    </div>
  )
}

export default MultiPageForm