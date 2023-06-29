import { SubmitHandler, useForm } from 'react-hook-form';
import { ICreateCampaignDto } from '../../../interfaces/campaign/dto';
import { FormField } from '../../base/FormField';
import { CreateCampaignInfo } from './CreateCampaignInfo';
import { Button } from '../../base/Button';
import { forwardRef, useImperativeHandle } from 'react';

interface CreateCampaignFormProps {
  isLoading: boolean;
  onCreate: (data: ICreateCampaignDto) => Promise<void>;
}

export const CreateCampaignForm = forwardRef(
  (props: CreateCampaignFormProps, ref) => {
    const {
      register,
      handleSubmit,
      setError,
      setValue,
      formState: { errors },
    } = useForm<ICreateCampaignDto>({
      defaultValues: {
        deadline: '',
        image: '',
        name: '',
        description: '',
        title: '',
        target: '',
      },
    });

    const submitHandler: SubmitHandler<ICreateCampaignDto> = async (
      data,
      event
    ) => {
      event?.preventDefault();
      await props.onCreate(data);
    };

    useImperativeHandle(ref, () => ({ setError, setValue }), [setError]);

    return (
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField<ICreateCampaignDto>
            id="name"
            label="Your Name *"
            placeholder="John Doe"
            type="text"
            required
            register={register}
            errors={errors}
            disabled={props.isLoading}
          />
          <FormField<ICreateCampaignDto>
            id="title"
            label="Campaign Title *"
            placeholder="Write a title"
            type="text"
            required
            register={register}
            errors={errors}
            disabled={props.isLoading}
          />
        </div>
        <FormField<ICreateCampaignDto>
          id="description"
          label="Story *"
          placeholder="Write your story"
          isTextarea
          required
          register={register}
          errors={errors}
          disabled={props.isLoading}
        />
        <CreateCampaignInfo />
        <div className="flex flex-wrap gap-[40px]">
          <FormField<ICreateCampaignDto>
            id="target"
            label="Goal *"
            placeholder="ETH 0.50"
            type="number"
            required
            register={register}
            errors={errors}
            disabled={props.isLoading}
          />
          <FormField<ICreateCampaignDto>
            id="deadline"
            label="End Date *"
            placeholder="End Date"
            type="date"
            required
            register={register}
            errors={errors}
            disabled={props.isLoading}
          />
          <FormField<ICreateCampaignDto>
            id="image"
            label="Campaign image *"
            placeholder="Place image URL of your campaign"
            type="url"
            required
            register={register}
            errors={errors}
            disabled={props.isLoading}
          />
          <div className="flex justify-center items-center mt-[30px]">
            <Button
              type="submit"
              label="Submit new campaign"
              className="bg-[#1dc071]"
            />
          </div>
        </div>
      </form>
    );
  }
);
