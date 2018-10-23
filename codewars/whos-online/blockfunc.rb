def who_is_online(friends)
  state = {}

  if friends.size == 0
    return state
  end

  names = get_names_for_status(friends, "online") { |last_activity| last_activity <= 10 }
  state["online"] = names if not names.empty?

  names = get_names_for_status(friends, "online") { |last_activity| last_activity > 10 }
  state["away"] = names if not names.empty?

  names = get_names_for_status(friends, "offline")
  state["offline"] = names if not names.empty?

  return state
end


def get_names_for_status (friends, status)
  friends = friends.select { |friend| friend["status"] == status }
  if block_given?
    friends = friends.select { |friend| yield(friend["last_activity"]) }
  end
  friends.collect { |friend| friend["username"] }
end


friends = [{"username"=> "David", "status"=> "online", "last_activity"=> 10},
           {"username"=> "Lucy", "status"=> "offline", "last_activity"=> 22},
           {"username"=> "Bob", "status"=> "online", "last_activity"=> 104}]


p who_is_online(friends)
