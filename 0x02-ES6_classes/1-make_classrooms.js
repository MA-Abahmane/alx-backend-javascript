import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const [obj1, obj2, obj3] = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
  return [obj1, obj2, obj3];
}
