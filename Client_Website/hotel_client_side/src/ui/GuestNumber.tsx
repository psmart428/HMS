import { useRoomMove } from "../context/RoomContext";
import type { CheckProps } from "../utils/AllInterfaces";
import {
  validateGuestNumberRule,
  validateGuestNumberRuleForBookingForm,
} from "../utils/validationRules";
import Error from "./Error";
import Label from "./Label";

function GuestNumber({
  register,
  error,
  options = [],
  isBookingForm = false,
}: CheckProps) {
  const { roomType } = useRoomMove();
  return (
    <div className="space-y-2">
      <Label htmlFor={"guests"}>
        <span>👥</span>
        <span>Number of Guests</span>
      </Label>
      <select
        id="guests"
        {...register(
          "guests",
          isBookingForm
            ? validateGuestNumberRuleForBookingForm(
                roomType?.roomTypeCapacity || 4
              )
            : validateGuestNumberRule()
        )}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <Error>{error}</Error>}
    </div>
  );
}

export default GuestNumber;
