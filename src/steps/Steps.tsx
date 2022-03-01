import { UploadFlow } from "./UploadFlow"
import { ModalHeader } from "@chakra-ui/react"
import { useSteps, Step, Steps as Stepper } from "chakra-ui-steps"
import { CgCheck } from "react-icons/cg"

const steps = [
  { label: "Upload file" },
  { label: "Select header row" },
  { label: "Match columns" },
  { label: "Validate data" },
]

const CheckIcon = ({ color }: { color: string }) => <CgCheck size="2.25rem" color={color} />

export const Steps = () => {
  const { nextStep, activeStep } = useSteps({
    initialStep: 0,
  })

  return (
    <>
      <ModalHeader>
        <Stepper activeStep={activeStep} checkIcon={CheckIcon}>
          {steps.map(({ label }) => (
            <Step label={label} key={label} />
          ))}
        </Stepper>
      </ModalHeader>
      <UploadFlow nextStep={nextStep} />
    </>
  )
}