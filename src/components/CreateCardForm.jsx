import { useCreateCardFormStore } from "@/stores/useCreateCardFormStore";
import { useCardListStore } from "@/stores/useCardListStore";
import { useForm } from "react-hook-form";

export default function CreateCardForm() {
  const { hideForm } = useCreateCardFormStore();
  const addNewCard = useCardListStore((state) => state.addNewCard);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const hashtags = data.hashtags.split(',').map(tag => tag.trim()).filter(tag => tag);
    const newCardData = {
      ...data,
      hashtags,
    };
    addNewCard({ key: "Enter" }, newCardData.url, () => {
      reset();
      hideForm();
    }, newCardData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-20 backdrop-blur-md">
      <div className="bg-white p-6 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Create New Card</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
              URL
            </label>
            <input
              type="text"
              id="url"
              {...register("url", { required: true })}
              className="mt-1 block w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:outline-none sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="mt-1 block w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:outline-none sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              className="mt-1 block w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:outline-none sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="hashtags" className="block text-sm font-medium text-gray-700">
              Hashtags (comma-separated)
            </label>
            <input
              type="text"
              id="hashtags"
              {...register("hashtags")}
              className="mt-1 block w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:outline-none sm:text-sm"
              placeholder="graphicdesign, typography, etc"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={hideForm}
              className="px-4 py-2 text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-950 text-white hover:bg-gray-800"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
