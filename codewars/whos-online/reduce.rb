def who_is_online(friends)
  friends.inject({}) do |state, friend|
    if friend["status"] == "online" && friend["last_activity"] > 10
      status = "away"
    else
      status = friend["status"]
    end
    state[status] ||= []
    state[status] << friend["username"]
    state
  end
end


friends = [{"username"=> "David", "status"=> "online", "last_activity"=> 10},
           {"username"=> "Lucy", "status"=> "offline", "last_activity"=> 22},
           {"username"=> "Bob", "status"=> "online", "last_activity"=> 104}]
p who_is_online(friends)
