/**
 * @author:msms
 * 04-Jun-17
 */
import { expect } from "chai";
import { OrderByPipe } from "../../src/pipes/order-by.pipe";

describe('OrderBy Pipe', () => {
  let pipe: OrderByPipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('correct number ordering', () => {
    expect(pipe.transform([3, 4, 2, 1]).join(',')).to.eq([1, 2, 3, 4].join(','));
  });

  it('correct string ordering', () => {
    expect(pipe.transform(['a', 'c', 'd', 'b']).join(',')).to.eq(['a', 'b', 'c', 'd'].join(','));
  });

});
