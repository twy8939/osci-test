import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import RangeDatePicker from "./RangeDatePicker";

const SearchableRangeDatePicker = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();

  const handleStartDateChange = (date: string) => {
    setStartDate(date);
    if (date === "") return handleDateChange("", "");
    if (endDate) handleDateChange(date, endDate);
  };

  const handleEndDateChange = (date: string) => {
    setEndDate(date);
    if (date === "") return handleDateChange("", "");
    if (startDate) handleDateChange(startDate, date);
  };

  const handleDateChange = (start: string, end: string) => {
    if (start && end) {
      searchParams.set("startDt", start);
      searchParams.set("endDt", end);
    } else {
      searchParams.delete("startDt");
      searchParams.delete("endDt");
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <RangeDatePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={handleStartDateChange}
      onEndDateChange={handleEndDateChange}
    />
  );
};

export default SearchableRangeDatePicker;
