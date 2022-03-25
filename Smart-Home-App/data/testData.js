import Room from '../models/room'
import Device from '../models/device'

export const ROOMS = [
    new Room(
        '1',
        'Bedroom',
        require('../assets/images/Bedroom.png'),
        [
            new Device('l1', 'light', 'Light 1', false),
            new Device('l2', 'light', 'Light 2', false),
            new Device('d1', 'door', 'Door 1', false),
            new Device('f1', 'fan', 'Fan 1', false),
        ]
    ),
    new Room(
        '2',
        'Livingroom',
        require('../assets/images/Livingroom.png'),
        [
            new Device('l2', 'light', 'Light 1', false),
            new Device('d2', 'door', 'Door 1', false),
            new Device('f2', 'fan', 'Fan 1', false),
        ]
    ),
    new Room(
        '3',
        'Kitchen',
        require('../assets/images/Kitchen.png'),
        [
            new Device('l3', 'light', 'Light 1', false),
            new Device('d3', 'door', 'Door 1', false),
            new Device('f3', 'fan', 'Fan 1', false),
        ]
    ),
    new Room(
        '4',
        'Bathroom',
        require('../assets/images/Bathroom.png'),
        [
            new Device('l4', 'light', 'Light 1', false),
            new Device('d4', 'door', 'Door 1', false),
            new Device('f4', 'fan', 'Fan 1', false),
        ]
    ),
    new Room(
        '5',
        'Garden',
        require('../assets/images/Garden.png'),
        [
            new Device('l5', 'light', 'Light 1', false),
            new Device('d5', 'door', 'Door 1', false),
            new Device('f5', 'fan', 'Fan 1', false),
        ]
    ),
    new Room(
        '6',
        'Balcony',
        require('../assets/images/Balcony.png'),
        [
            new Device('l6', 'light', 'Light 1', false),
            new Device('d6', 'door', 'Door 1', false),
            new Device('f6', 'fan', 'Fan 1', false),
        ]
    ),
]
