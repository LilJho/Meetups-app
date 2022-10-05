import { useRef } from "react";
import Card from "../ui/Card";

function MeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImageUrl = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImageUrl,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className="p-4" onSubmit={submitHandler}>
        <div className="mb-2">
          <label htmlFor="title" className="block mb-2 font-bold">
            Meetup Title
          </label>
          <input
            type="text"
            required
            id="title"
            className="block w-full p-1 rounded shadow"
            ref={titleInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="image" className="block mb-2 font-bold">
            Meetup Image
          </label>
          <input
            type="url"
            required
            id="image"
            className="block w-full p-1 rounded shadow"
            ref={imageInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="address" className="block mb-2 font-bold">
            Address
          </label>
          <input
            type="text"
            required
            id="address"
            className="block w-full p-1 rounded shadow"
            ref={addressInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="block mb-2 font-bold">
            Description
          </label>
          <textarea
            id="description"
            required
            rows="5"
            className="block w-full p-1 rounded shadow"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="mt-4 text-right">
          <button className="cursor-pointer bg-[#77002e] text-white py-2 px-6 border-[#77002e] shadow font-bold hover:bg-[#a50e48] hover:border-[#a50e48]">
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
}

export default MeetupForm;
