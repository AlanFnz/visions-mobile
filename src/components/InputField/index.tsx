import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { TextInput, StyleSheet } from 'react-native';
import { Control, Path } from 'react-hook-form';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    width: '100%',
    padding: 10,
    borderRadius: 4
  }
});

interface InputFieldProps<FormDataShape extends FieldValues> {
  control: Control<FormDataShape>;
  name: Path<FormDataShape>;
  rules?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validate?: (value: unknown) => boolean | string;
  };
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const InputField = <FormDataShape extends FieldValues>({
  control,
  name,
  rules,
  secureTextEntry,
  autoCapitalize
}: InputFieldProps<FormDataShape>) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={styles.input}
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          value={value}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
        />
      )}
      name={name}
      rules={rules}
    />
  );
};

export default InputField;
