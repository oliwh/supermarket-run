/*** Creates all the shelves in the scene as one array so all can be updated at once ***/

import Shelf from 'Shelf.js';

let shelves = [];

function initShelves() {
    //x, y, w, h
    shelves.push(new Shelf(1, 0, 1, 4));
    shelves.push(new Shelf(3, 0, 1, 2));
    shelves.push(new Shelf(5, 0, 1, 3));
    shelves.push(new Shelf(7, 0, 1, 1));
    shelves.push(new Shelf(9, 0, 1, 4));
    shelves.push(new Shelf(21, 0, 4, 1));
    shelves.push(new Shelf(11, 1, 7, 1));
    shelves.push(new Shelf(19, 1, 1, 7));
    shelves.push(new Shelf(7, 2, 1, 5));
    shelves.push(new Shelf(14, 2, 1, 7));
    shelves.push(new Shelf(21, 2, 4, 1));
    shelves.push(new Shelf(3, 3, 1, 4));
    shelves.push(new Shelf(11, 3, 2, 1));
    shelves.push(new Shelf(16, 3, 2, 1));
    shelves.push(new Shelf(5, 4, 1, 3));
    shelves.push(new Shelf(11, 4, 1, 3));
    shelves.push(new Shelf(17, 4, 1, 3));
    shelves.push(new Shelf(21, 4, 4, 1));
    shelves.push(new Shelf(1, 5, 1, 2));
    shelves.push(new Shelf(9, 5, 1, 2));
    shelves.push(new Shelf(15, 5, 1, 1));
    shelves.push(new Shelf(12, 6, 2, 1));
    shelves.push(new Shelf(21, 6, 4, 1));
    shelves.push(new Shelf(0, 8, 1, 11));
    shelves.push(new Shelf(2, 8, 1, 6));
    shelves.push(new Shelf(4, 8, 3, 1));
    shelves.push(new Shelf(8, 8, 3, 1));
    shelves.push(new Shelf(12, 8, 1, 6));
    shelves.push(new Shelf(16, 8, 8, 1));
    shelves.push(new Shelf(23, 9, 1, 2));
    shelves.push(new Shelf(4, 10, 7, 1));
    shelves.push(new Shelf(14, 10, 1, 4));
    shelves.push(new Shelf(16, 10, 1, 4));
    shelves.push(new Shelf(18, 10, 4, 1));
    shelves.push(new Shelf(18, 12, 1, 5));
    shelves.push(new Shelf(20, 12, 1, 5));
    shelves.push(new Shelf(22, 12, 1, 5));
    shelves.push(new Shelf(24, 12, 1, 5));
    shelves.push(new Shelf(3, 13, 4, 1));
    shelves.push(new Shelf(8, 13, 4, 1));
    shelves.push(new Shelf(8, 14, 1, 5));
    shelves.push(new Shelf(2, 15, 1, 4));
    shelves.push(new Shelf(4, 15, 1, 4));
    shelves.push(new Shelf(6, 15, 1, 4));
    shelves.push(new Shelf(10, 15, 1, 9));
    shelves.push(new Shelf(12, 15, 5, 1));
    shelves.push(new Shelf(13, 17, 1, 5));
    shelves.push(new Shelf(15, 17, 1, 5));
    shelves.push(new Shelf(18, 18, 6, 1));
    shelves.push(new Shelf(1, 20, 8, 1));
    shelves.push(new Shelf(18, 20, 6, 1));
    shelves.push(new Shelf(16, 21, 1, 1));
    shelves.push(new Shelf(0, 22, 4, 1));
    shelves.push(new Shelf(7, 22, 2, 1));
    shelves.push(new Shelf(19, 22, 1, 3));
    shelves.push(new Shelf(21, 22, 1, 3));
    shelves.push(new Shelf(23, 22, 1, 3));
    shelves.push(new Shelf(8, 23, 1, 1));
    shelves.push(new Shelf(12, 23, 6, 1));
}