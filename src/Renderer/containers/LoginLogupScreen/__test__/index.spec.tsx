import React, { ChangeEvent } from 'react';
import { render, screen, act, fireEvent } from '../../../test-helpers';

import LoginLogup from '..';
import { LoginOptions, TestIDs } from '../types';

describe('LoginLogup Screen', () => {
  const props = {
    onLogup: jest.fn(),
    onLogin: jest.fn(),
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show the change in the ', () => {
    act(() => {
      render(<LoginLogup {...props} />);
    });

    const logupItem = screen.getByLabelText('Logup');
    const loginItem = screen.getByLabelText('Login');

    expect(loginItem).toBeChecked();
    expect(logupItem).not.toBeChecked();

    act(() => {
      fireEvent.click(logupItem);
    });

    expect(loginItem).not.toBeChecked();
    expect(logupItem).toBeChecked();
  });

  it('review text fields for login', () => {
    act(() => {
      render(<LoginLogup {...props} />);
    });
    const emailTextField = screen.queryByTestId(TestIDs.email);
    const passwordTextField = screen.queryByTestId(TestIDs.password);
    const confirmPasswordTextField = screen.queryByTestId(TestIDs.confirm);
    const submit = screen.queryByText('Ingresar');

    expect(emailTextField).toBeInTheDocument();
    expect(passwordTextField).toBeInTheDocument();
    expect(confirmPasswordTextField).not.toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it('review text fields for logup', () => {
    act(() => {
      render(<LoginLogup {...props} />);
    });

    const logupItem = screen.getByLabelText('Logup');
    act(() => {
      fireEvent.click(logupItem);
    });

    const emailTextField = screen.queryByTestId(TestIDs.email);
    const passwordTextField = screen.queryByTestId(TestIDs.password);
    const confirmPasswordTextField = screen.queryByTestId(TestIDs.confirm);
    const submit = screen.queryByText('Registrame');

    expect(emailTextField).toBeInTheDocument();
    expect(passwordTextField).toBeInTheDocument();
    expect(confirmPasswordTextField).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it('calls onLogin callback when submit', () => {
    const emailField = 'email@test.com';
    const passwordField = 'test1234';

    act(() => {
      render(<LoginLogup {...props} />);
    });

    const emailTextField = screen.getByTestId(TestIDs.email);
    const passwordTextField = screen.getByTestId(TestIDs.password);
    const submitButton = screen.getByText('Ingresar');

    act(() => {
      fireEvent.change(emailTextField, {
        target: { value: emailField },
      } as ChangeEvent<HTMLInputElement>);
      fireEvent.change(passwordTextField, {
        target: { value: passwordField },
      } as ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      fireEvent.click(submitButton);
    });

    expect(props.onLogin).toHaveBeenCalledTimes(1);
    expect(props.onLogin).toHaveBeenCalledWith(emailField, passwordField);
    expect(props.onLogup).toHaveBeenCalledTimes(0);
  });

  it('calls onLogup callback when submit', () => {
    const emailField = 'email@test.com';
    const passwordField = 'test1234';

    act(() => {
      render(<LoginLogup {...props} initTab={LoginOptions.LOGUP} />);
    });

    const emailTextField = screen.getByTestId(TestIDs.email);
    const passwordTextField = screen.getByTestId(TestIDs.password);
    const consfirmPasswordTextField = screen.getByTestId(TestIDs.confirm);
    const submitButton = screen.getByText('Registrame');

    act(() => {
      fireEvent.change(emailTextField, {
        target: { value: emailField },
      } as ChangeEvent<HTMLInputElement>);
      fireEvent.change(passwordTextField, {
        target: { value: passwordField },
      } as ChangeEvent<HTMLInputElement>);
      fireEvent.change(consfirmPasswordTextField, {
        target: { value: passwordField },
      } as ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      fireEvent.click(submitButton);
    });

    expect(props.onLogup).toHaveBeenCalledTimes(1);
    expect(props.onLogup).toHaveBeenCalledWith(emailField, passwordField, passwordField);
    expect(props.onLogin).toHaveBeenCalledTimes(0);
  });
});
