import {TimeSlot} from "../values/interfaces";

const timeSlots: TimeSlot[] = [
    {order: 1, value: 'Sa 10:00 - Sa 10:45'},
    {order: 2, value: 'Sa 11:00 - Sa 11:45'},
    {order: 3, value: 'Sa 13:00 - Sa 13:45'},
    {order: 4, value: 'Sa 14:00 - Sa 14:45'},
    {order: 5, value: 'Sa 15:00 - Sa 15:45'},
    {order: 6, value: 'Sa 16:00 - Sa 16:45'},
    {order: 7, value: 'Sa 17:00 - Sa 17:45'},
    {order: 8, value: 'So 9:00 - Sa 9:45'},
    {order: 9, value: 'So 10:00 - Sa 10:45'},
    {order: 10, value: 'So 11:00 - Sa 11:45'},
    {order: 11, value: 'So 13:00 - Sa 13:45'},
    {order: 12, value: 'So 14:00 - Sa 14:45'},
    {order: 13, value: 'So 15:00 - Sa 15:45'},
];

export const System = {
    timeSlots: timeSlots
};
