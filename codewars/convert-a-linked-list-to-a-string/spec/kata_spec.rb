require 'kata'

describe "stringify" do
  it "No node passed" do
    expect(stringify(nil)).to eq "null"
  end
  it "One node" do
    expect(stringify(Node.new(3))).to eq "3 -> null"
  end
  it "Two nodes" do
    expect(stringify(Node.new(3, Node.new(1)))).to eq "3 -> 1 -> null"
  end
  it "Three nodes" do
    expect(stringify(Node.new(6, Node.new(3, Node.new(1))))).to eq "6 -> 3 -> 1 -> null"
  end
  it "Ten nodes" do
    node = nil
    (0..10).each { |n| node = Node.new(n, node) }
    expected = (10).downto(0).to_a.join(" -> ") + " -> null"
    expect(stringify(node)).to eq expected
  end
end
