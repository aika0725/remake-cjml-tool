import React from 'react'
import { Typography, Button } from '@mui/material'
import { FieldArray, useFormikContext } from 'formik'
import { IFormData } from '../../../../interfaces/FormData'
import ActorCard from './ActorCard'
import DeleteButton from '../../../generic-components/DeleteButton/DeleteButton'
import AddIcon from '@mui/icons-material/Add'
import { CardHeader, FormCard, Section, SectionTitle } from '../../../Styles/FormCard'

const ActorsSection = () => {
  const { values } = useFormikContext<IFormData>()

  const uid = Math.floor(100000 + Math.random() * 900000).toString()

  return (
    <Section>
      <SectionTitle>
        <Typography variant='h5'>Actors</Typography>
      </SectionTitle>
      <FieldArray
        name='actors'
        render={(arrayHelpers) => (
          <>
            {values.actors.map((_, index) => (
              <FormCard key={index}>
                <CardHeader>
                  <Typography variant='h6'>Actor #{index + 1}</Typography>
                  <DeleteButton arrayHelpers={arrayHelpers} index={index} />
                </CardHeader>
                <ActorCard
                  name={`actors[${index}].actorName`}
                  role={`actors[${index}].actorRole`}
                  index={index}
                />
              </FormCard>
            ))}
            <Button
              variant='text'
              startIcon={<AddIcon />}
              onClick={() => arrayHelpers.push({ id: uid, actorName: '', actorRole: '' })}
            >
              New actor
            </Button>
          </>
        )}
      />
    </Section>
  )
}

export default ActorsSection
