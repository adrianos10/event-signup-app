import { act, fireEvent, render } from '@testing-library/react';
import FormProvider from 'contexts/FormProvider';

import FormContent from './FormContent';
import { FormValues } from './types';

describe('Form', () => {
  describe('with validation passed', () => {
    it('calls onSubmit', async () => {
      const mockSubmit = jest.fn();
      const { getByPlaceholderText, getByText } = render(
        <FormProvider<FormValues> options={{ defaultValues: { eventId: 1 } }}>
          <FormContent onSubmit={mockSubmit} loading={false} />
        </FormProvider>
      );

      await act(async () => {
        fireEvent.change(getByPlaceholderText('John'), {
          target: { value: 'John' },
        });
        fireEvent.change(getByPlaceholderText('Doe'), {
          target: { value: 'Doe' },
        });
        fireEvent.change(getByPlaceholderText('john.doe@example.com'), {
          target: { value: 'john.doe@example.com' },
        });
      });

      await act(async () => {
        fireEvent.click(getByText('Signup'));
      });

      expect(mockSubmit).toHaveBeenCalled();
    });
  });

  it("doesn't call onSubmit when validation is not passed and displays validation messages", async () => {
    const mockSubmit = jest.fn();
    const { getByText, getAllByText } = render(
      <FormProvider>
        <FormContent onSubmit={mockSubmit} loading={false} />
      </FormProvider>
    );

    await act(async () => {
      fireEvent.click(getByText('Signup'));
    });

    const fieldsValidationError = getAllByText('This field is required');
    const eventIdValidationError = getByText('Please select event date');

    expect(fieldsValidationError).toHaveLength(3);
    expect(eventIdValidationError).toBeVisible();
    expect(mockSubmit).toHaveBeenCalledTimes(0);
  });

  it('properly validates email field', async () => {
    const { getByPlaceholderText, getByText } = render(
      <FormProvider>
        <FormContent onSubmit={() => undefined} loading={false} />
      </FormProvider>
    );

    await act(async () => {
      fireEvent.change(getByPlaceholderText('john.doe@example.com'), {
        target: { value: 'john.doe' },
      });
    });

    await act(async () => {
      fireEvent.click(getByText('Signup'));
    });

    const emailValidationError = getByText(
      'Please provide valid email address'
    );

    expect(emailValidationError).toBeTruthy();
  });
});