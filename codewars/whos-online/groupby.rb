def who_is_online(friends)
  state = friends.group_by do |friend|
    if friend["status"] == "online" and friend["last_activity"] > 10
      "away"
    else
      friend["status"]
    end
  end
  state.transform_values{ |friends| friends.map{ |friend| friend["username"] } }
end

friends = [{"username"=> "David", "status"=> "online", "last_activity"=> 10},
           {"username"=> "Lucy", "status"=> "offline", "last_activity"=> 22},
           {"username"=> "Bob", "status"=> "online", "last_activity"=> 104}]
p who_is_online(friends)
