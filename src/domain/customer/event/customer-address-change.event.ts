import EventInterface from "../../@shared/event/event.interface";

interface CustomerAddressChangedData {
  id: string;
  name: string;
  address: string;
}

export default class CustomerAddressChangeEvent implements EventInterface {
  dataTimeOccurred: Date;
  eventData: CustomerAddressChangedData;

  constructor(eventData: CustomerAddressChangedData) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }
}

