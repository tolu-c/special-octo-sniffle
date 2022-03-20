import Button from '../ui/Button'

function EventSearch(props) {
  return (
    <form className="my-4 flex items-center bg-white shadow-lg rounded-md mx-auto max-w-xl h-16 border px-4">
      <div className="flex items-center flex-auto justify-around">
        <div className="flex items-center">
          <label htmlFor="year" className="text-base font-semibold mr-4">
            Year
          </label>
          <select id="year" className="rounded-md h-10 w-32 text-sm">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className="flex items-center">
          <label htmlFor="month" className="text-base font-semibold mr-4">
            Month
          </label>
          <select id="month" className="rounded-md h-10 w-32 text-sm">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>

      <Button>Find event</Button>
    </form>
  );
}

export default EventSearch;
