interface ReminderProps {
  id: string;
  title: string;
  description: string;
  dateTime: string;
  color: string;
  city: {
    description: string;
    coordinates?: google.maps.LatLngLiteral;
  };
}

export default ReminderProps;
