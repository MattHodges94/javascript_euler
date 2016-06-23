var sum = 0;
for(var i=0; i<1000; i++){
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
  console.log(i, sum);
}
class Multiples

  def multiples
    (1..999).select do |i|
    i % 3 == 0 || i % 5 == 0
  end

  def sum_multiple(multiples)
    total = multiples.inject(&:+)
  end

end
end
multiples = Multiples.new
multiples.sum_multiple(multiples.multiples)
