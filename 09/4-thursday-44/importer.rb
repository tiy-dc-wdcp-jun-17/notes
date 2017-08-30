class CSVImporter
  def initialize(filename)
    @filename = filename
  end                       # => :initialize

  def perform
    read_file
  end          # => :perform

  private def read_file
    @contents = File.read(filename)
  end                                # => CSVImporter


end  # => CSVImporter
