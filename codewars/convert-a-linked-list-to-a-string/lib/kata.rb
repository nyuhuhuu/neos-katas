class Node
  attr_reader :data, :next_node

  def initialize(data, next_node=nil)
    @data = data
    @next_node = next_node
  end
end

def stringify(node)
  res = []
  until node.nil?
   res << "#{node.data}"
   node = node.next_node
  end
  res << "null"
  return res.join(" -> ")
end
