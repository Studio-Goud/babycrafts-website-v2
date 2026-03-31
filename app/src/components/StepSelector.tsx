import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Step {
  id: string;
  title: string;
  description: string;
  options: {
    id: string;
    label: string;
    description?: string;
    price?: string;
  }[];
}

interface StepSelectorProps {
  steps: Step[];
  onComplete?: (selections: Record<string, string>) => void;
}

const StepSelector = ({ steps, onComplete }: StepSelectorProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (optionId: string) => {
    const step = steps[currentStep];
    const newSelections = { ...selections, [step.id]: optionId };
    setSelections(newSelections);

    // Auto advance after selection
    setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsComplete(true);
        onComplete?.(newSelections);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setIsComplete(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelections({});
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 lg:p-12 text-center"
      >
        <div className="w-16 h-16 bg-[#C9A962]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-[#C9A962]" />
        </div>
        
        <h3 className="font-serif text-2xl lg:text-3xl text-[#3D3229] mb-4">
          Perfect! Dit is jouw keuze
        </h3>
        
        <div className="space-y-3 mb-8 max-w-md mx-auto">
          {steps.map((step) => {
            const selected = step.options.find(o => o.id === selections[step.id]);
            return (
              <div key={step.id} className="flex justify-between items-center py-3 border-b border-[#F5F1EB]">
                <span className="text-[#3D3229]/60">{step.title}</span>
                <span className="font-medium text-[#3D3229]">{selected?.label}</span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={handleReset} className="btn-secondary">
            Begin opnieuw
          </button>
          <Link to="/tarieven" className="btn-primary">
            Bekijk prijzen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    );
  }

  const step = steps[currentStep];

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8">
      {/* Progress */}
      <div className="flex items-center mb-8">
        {steps.map((s, index) => (
          <div key={s.id} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                index <= currentStep
                  ? 'bg-[#C9A962] text-white'
                  : 'bg-[#F5F1EB] text-[#3D3229]/40'
              }`}
            >
              {index < currentStep ? (
                <Check className="w-4 h-4" />
              ) : (
                index + 1
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-12 h-0.5 mx-2 transition-colors ${
                  index < currentStep ? 'bg-[#C9A962]' : 'bg-[#F5F1EB]'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="font-serif text-xl lg:text-2xl text-[#3D3229] mb-2">
          {step.title}
        </h3>
        <p className="text-[#3D3229]/60 mb-6">
          {step.description}
        </p>

        <div className="space-y-3">
          {step.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full p-4 lg:p-5 rounded-xl border-2 text-left transition-all duration-200 ${
                selections[step.id] === option.id
                  ? 'border-[#C9A962] bg-[#C9A962]/5'
                  : 'border-[#F5F1EB] hover:border-[#C9A962]/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#3D3229]">{option.label}</p>
                  {option.description && (
                    <p className="text-sm text-[#3D3229]/60 mt-1">
                      {option.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center">
                  {option.price && (
                    <p className="font-serif text-[#C9A962] mr-4">
                      {option.price}
                    </p>
                  )}
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selections[step.id] === option.id
                        ? 'border-[#C9A962] bg-[#C9A962]'
                        : 'border-[#E8DFC8]'
                    }`}
                  >
                    {selections[step.id] === option.id && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Back button */}
      {currentStep > 0 && (
        <button
          onClick={handleBack}
          className="mt-6 text-[#3D3229]/60 hover:text-[#3D3229] text-sm transition-colors"
        >
          ← Terug naar vorige stap
        </button>
      )}
    </div>
  );
};

export default StepSelector;
