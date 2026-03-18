import React from 'react';
import { Step, Steps } from '../components/Step';

const steps = ['Step 1', 'Step 2', 'Step 3'];

const StepPage = () => {
  const [step, setStep] = React.useState(0);

  return (
    <div>
      <h1 className='title'>Step</h1>

      <div className='section-container'>
        <Steps activeStep={step}>
          {steps.map((label) => (
            <Step key={label} label={label} />
          ))}
        </Steps>
        <div
          style={{
            marginBlock: '24px',
          }}
        >
          {step === 0 && (
            <div style={{ textAlign: 'center' }}>
              <h4>Active step: {step + 1}</h4>
            </div>
          )}
          {step === 1 && (
            <div style={{ textAlign: 'center' }}>
              <h4>Active step: {step + 1}</h4>
            </div>
          )}
          {step === 2 && (
            <div style={{ textAlign: 'center' }}>
              <h4>Active step: {step + 1}</h4>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              marginTop: '16px',
            }}
          >
            <button
              disabled={step === 0}
              onClick={() => setStep(prev => prev - 1)}
            >
              Prev
            </button>

            <button
              disabled={step === 2}
              onClick={() => setStep(prev => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className='section-container'>
        <Steps activeStep={1}>
          {steps.map((label) => (
            <Step key={label} />
          ))}
        </Steps>
      </div>

      <div className='section-container'>
        <Steps activeStep={1}>
          {steps.map((label) => (
            <Step key={label} variant='dot' />
          ))}
        </Steps>
      </div>

      <div className='section-container'>
        <Steps activeStep={1}>
          {steps.map((label) => (
            <Step key={label} variant='icon' />
          ))}
        </Steps>
      </div>
    </div>
  );
}

export default StepPage;
