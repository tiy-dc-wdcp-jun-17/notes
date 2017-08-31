# A block is just syntax. 

def proc_bamboozle
  Proc.new do       # => Proc
    return 2 * 7    # => 14
  end.call
  99
end                 # => :proc_bamboozle
proc_bamboozle      # => 14

def lambda_bamboozle
  -> do
    return 2 * 7      # => 14
  end.call            # => 14
  99                  # => 99
end                   # => :lambda_bamboozle
lambda_bamboozle      # => 99
