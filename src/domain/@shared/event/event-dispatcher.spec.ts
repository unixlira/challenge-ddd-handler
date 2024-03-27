import SendEmailWhenProductIsCreatedHandler from "../../product/event/handler/send-email-when-product-is-created.handler";
import EnviaConsoleLogHandler from "../../customer/event/handler/console-log.handler";
import EnviaConsoleLog1Handler from "../../customer/event/handler/console-log-1.handler";
import EnviaConsoleLog2Handler from "../../customer/event/handler/console-log-2.handler";
import ProductCreatedEvent from "../../product/event/product-created.event";
import CustomerCreatedEvent from "../../customer/event/customer-created.event";
import CustomerAddressChangeEvent from "../../customer/event/customer-address-change.event";
import EventDispatcher from "./event-dispatcher";

describe("Domain events tests", () => {
  it("should register an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandlerSendEmailWhenProductIsCreatedHandler = new SendEmailWhenProductIsCreatedHandler();
    const eventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler = new EnviaConsoleLog1Handler();
    const eventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler = new EnviaConsoleLog2Handler();
    const eventHandlerEnviaConsoleLogAddressChangedHandler = new EnviaConsoleLogHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandlerSendEmailWhenProductIsCreatedHandler);
    eventDispatcher.register("CustomerCreatedEvent", eventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler);
    eventDispatcher.register("CustomerCreatedEvent", eventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler);
    eventDispatcher.register("CustomerAddressChangeEvent", eventHandlerEnviaConsoleLogAddressChangedHandler);

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"]
    ).toBeDefined();
    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"].length
    ).toBe(1);
    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
    ).toMatchObject(eventHandlerSendEmailWhenProductIsCreatedHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"]
    ).toBeDefined();
    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length
    ).toBe(2);
    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
    ).toMatchObject(eventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler);
    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]
    ).toMatchObject(eventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangeEvent"]
    ).toBeDefined();
    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangeEvent"].length
    ).toBe(1);
    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangeEvent"][0]
    ).toMatchObject(eventHandlerEnviaConsoleLogAddressChangedHandler);
  });

  it("should unregister an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandlerSendEmailWhenProductIsCreatedHandler = new SendEmailWhenProductIsCreatedHandler();
    const eventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler = new EnviaConsoleLog1Handler();
    const eventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler = new EnviaConsoleLog2Handler();
    const eventHandlerEnviaConsoleLogAddressChangedHandler = new EnviaConsoleLogHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandlerSendEmailWhenProductIsCreatedHandler);
    eventDispatcher.register("CustomerCreatedEvent", eventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler);
    eventDispatcher.register("CustomerCreatedEvent", eventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler);
    eventDispatcher.register("CustomerAddressChangeEvent", eventHandlerEnviaConsoleLogAddressChangedHandler);

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
    ).toMatchObject(eventHandlerSendEmailWhenProductIsCreatedHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
    ).toMatchObject(eventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler);
    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]
    ).toMatchObject(eventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler);

    eventDispatcher.unregister("ProductCreatedEvent", eventHandlerSendEmailWhenProductIsCreatedHandler);
    eventDispatcher.unregister("CustomerCreatedEvent", eventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler);
    eventDispatcher.unregister("CustomerCreatedEvent", eventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler);
    eventDispatcher.unregister("CustomerAddressChangeEvent", eventHandlerEnviaConsoleLogAddressChangedHandler);

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"]
    ).toBeDefined();
    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"].length
    ).toBe(0);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"]
    ).toBeDefined();
    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length
    ).toBe(0);

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangeEvent"]
    ).toBeDefined();
    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangeEvent"].length
    ).toBe(0);
  });

  it("should unregister all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandlerSendEmailWhenProductIsCreatedHandler = new SendEmailWhenProductIsCreatedHandler();
    const eventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler = new EnviaConsoleLog1Handler();
    const eventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler = new EnviaConsoleLog2Handler();
    const eventHandlerEnviaConsoleLogAddressChangedHandler = new EnviaConsoleLogHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandlerSendEmailWhenProductIsCreatedHandler);
    eventDispatcher.register("CustomerCreatedEvent", eventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler);
    eventDispatcher.register("CustomerCreatedEvent", eventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler);
    eventDispatcher.register("CustomerAddressChangeEvent", eventHandlerEnviaConsoleLogAddressChangedHandler);

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
    ).toMatchObject(eventHandlerSendEmailWhenProductIsCreatedHandler);

    eventDispatcher.unregisterAll();

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"]
    ).toBeUndefined();

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"]
    ).toBeUndefined();

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangeEvent"]
    ).toBeUndefined();

  });

  it("should notify all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandlerSendEmailWhenProductIsCreatedHandler = new SendEmailWhenProductIsCreatedHandler();
    const eventHandlerEnviaConsoleLogAddressChangedHandler = new EnviaConsoleLogHandler();
    const eventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler = new EnviaConsoleLog1Handler();
    const eventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler = new EnviaConsoleLog2Handler();
    const spyeventHandlerSendEmailWhenProductIsCreatedHandler = jest.spyOn(eventHandlerSendEmailWhenProductIsCreatedHandler, "handle");
    const spyeventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler = jest.spyOn(eventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler, "handle");
    const spyeventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler = jest.spyOn(eventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler, "handle");
    const spyeventHandlerEnviaConsoleLogAddressChangedHandler = jest.spyOn(eventHandlerEnviaConsoleLogAddressChangedHandler, "handle");

    eventDispatcher.register("ProductCreatedEvent", eventHandlerSendEmailWhenProductIsCreatedHandler);
    eventDispatcher.register("CustomerCreatedEvent", eventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler);
    eventDispatcher.register("CustomerCreatedEvent", eventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler);
    eventDispatcher.register("CustomerAddressChangeEvent", eventHandlerEnviaConsoleLogAddressChangedHandler);

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
    ).toMatchObject(eventHandlerSendEmailWhenProductIsCreatedHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
    ).toMatchObject(eventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler);
    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]
    ).toMatchObject(eventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler);

    const productCreatedEvent = new ProductCreatedEvent({
      name: "Product 1",
      description: "Product 1 description",
      price: 10.0,
    });

    const customerCreatedEvent = new CustomerCreatedEvent({ 
      id: "e1a55c6c-75ee-41db-b441-5f99a2686633", 
      name: "José Lira" 
    });

    const customerAddressChangeEvent = new CustomerAddressChangeEvent({ 
      id: customerCreatedEvent.eventData.id, 
      name: customerCreatedEvent.eventData.name, 
      address: "Rua Mogi Mirim, 20 - São Paulo SP"
    });

    eventDispatcher.notify(productCreatedEvent);
    eventDispatcher.notify(customerCreatedEvent);
    eventDispatcher.notify(customerAddressChangeEvent);

    expect(
      spyeventHandlerSendEmailWhenProductIsCreatedHandler
    ).toHaveBeenCalled();
    expect(
      spyeventHandlerEnviaConsoleLog1WhenCustomerCreatedHandler
    ).toHaveBeenCalled();
    expect(
      spyeventHandlerEnviaConsoleLog2WhenCustomerCreatedHandler
    ).toHaveBeenCalled();
    expect(
      spyeventHandlerEnviaConsoleLogAddressChangedHandler
    ).toHaveBeenCalled();
  });
});
