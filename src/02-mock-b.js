export function sendMessage(service, message) {
  return service.deliver(message);
}
