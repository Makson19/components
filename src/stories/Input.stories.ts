import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from '../components/Input';


const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs', 'dev'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleInput: Story = {};
